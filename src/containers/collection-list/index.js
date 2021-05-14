import React, { memo, useEffect, useMemo, useState } from 'react';
import BigNumber from 'bignumber.js';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import { MAIN_GRAPH_COUNT_DAYS, TOTAL_VOLUME_DAYS } from '@constants/global.constants';
import { STORAGE_SORT_BY_AUCTION } from '@constants/storage.constants';
import { getChainId } from '@selectors/global.selectors';
import { getMonaPerEth } from '@selectors/global.selectors';
import collectionActions from '@actions/collection.actions';
import { getAllCollections, getAllMarketplaceOffers } from '@selectors/collection.selectors';
import {
  getAllAuctions,
  getGlobalStats,
  getWeekResultedAuctions,
  getMonthResultedAuctions,
} from '@selectors/auction.selectors';
import { useAPY } from '@hooks/apy.hooks';
import wsApi from '@services/api/ws.service';
import { useSubscription } from '@hooks/subscription.hooks';
import GeneralInformation from '@containers/page-products-list/general-information';
import TextContent from '@containers/page-products-list/text-content';
import ProductCollection from '@components/product-collection';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import styles from './styles.module.scss';

const collections = [
  {
    id: 1,
    text: 'Collection: Kodomodachi x Charli Cohen',
    designer: 'Kodomodachi',
    image: 'https://gateway.pinata.cloud/ipfs/QmYvo2f6NfCD75nL49Gy5wi1jEYSh8z7wTHJjnJbV9KJt3',
  },
  {
    id: 2,
    text: 'DIGI Bundle',
    designer: 'Digitalax',
    image: 'https://gateway.pinata.cloud/ipfs/QmQGuYKtqNUKqAqxmHkuYB4qCS9riKW6Eu1SNhBToBc4ry',
  },
];

const PageAuctionList = () => {
  const dispatch = useDispatch();
  const auctions = useSelector(getAllAuctions);
  const weekResultedAuctions = useSelector(getWeekResultedAuctions).toJS();
  const globalStats = useSelector(getGlobalStats).toJS();
  const monthResultedAuctions = useSelector(getMonthResultedAuctions).toJS();
  const currentCollections = useSelector(getAllCollections).toJS();
  const chainId = useSelector(getChainId);
  const monaPerEth = useSelector(getMonaPerEth);
  const currentAuctions = auctions.toJS();

  useSubscription(
    {
      request: wsApi.onDaysChange(MAIN_GRAPH_COUNT_DAYS),
      next: (data) => dispatch(auctionPageActions.updateMonthStats(data.days)),
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onDaysChange(TOTAL_VOLUME_DAYS),
      next: (data) => dispatch(auctionPageActions.updateWeekStats(data.days)),
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onNFTGlobalStats(),
      next: (data) => {
        dispatch(
          auctionPageActions.updateGlobalStats(
            data.digitalaxGarmentNFTGlobalStats.length > 0
              ? data.digitalaxGarmentNFTGlobalStats[0]
              : []
          )
        );
      },
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onDigitalaxMarketplaceOffers(currentCollections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data.digitalaxMarketplaceOffers));
      },
    },
    [chainId, currentCollections]
  );

  useEffect(
    () => () => {
      if (!auctions) {
        dispatch(auctionPageActions.reset());
      }
    },
    []
  );

  const nowTimestamp = Date.now();

  const filteredAuctionsTimes = currentAuctions
    .filter((item) => item.endTime * 1000 - nowTimestamp > 0)
    .map((item) => item.endTime * 1000);

  const minTimestampAutcionTime = filteredAuctionsTimes.length
    ? Math.min(...filteredAuctionsTimes)
    : 0;

  const sumTopBids = (items) =>
    items.reduce(
      (acc, auction) =>
        auction.totalNetBidActivity
          ? acc.plus(
              new BigNumber(auction.totalNetBidActivity)
                .plus(new BigNumber(auction.totalMarketplaceVolumeInETH))
                .plus(
                  new BigNumber(auction.totalMarketplaceVolumeInMona).times(
                    new BigNumber(monaPerEth)
                  )
                )
            )
          : acc,
      new BigNumber(0)
    );

  const totalWeekValue = sumTopBids(weekResultedAuctions);
  let highestBid = new BigNumber(0);

  currentAuctions.forEach((auction) => {
    if (!auction.topBid) {
      return;
    }

    const bid = new BigNumber(auction.topBid);

    if (bid.gt(highestBid)) {
      highestBid = bid;
    }
  });
  const estimateApy = useAPY(highestBid.toString(10));

  const list = useMemo(() => {
    let totalSum = new BigNumber(0);
    if (globalStats.totalSalesValue) {
      totalSum = totalSum.plus(
        new BigNumber(globalStats.totalMarketplaceSalesInMona).times(new BigNumber(monaPerEth))
      );
      totalSum = totalSum.plus(new BigNumber(globalStats.totalMarketplaceSalesInETH));
      totalSum = totalSum.plus(new BigNumber(globalStats.totalSalesValue));
    }
    return [
      {
        description: 'Total NFT’s value',
        value: Math.round(parseFloat(convertToEth(totalSum.integerValue())) * 10000) / 10000,
      },
      {
        description: `Total Vol ${TOTAL_VOLUME_DAYS} days`,
        value:
          Math.round(
            parseFloat(
              convertToEth(totalWeekValue.gte(0) ? totalWeekValue : totalWeekValue.times(-1))
            ) * 100
          ) / 100,
      },
      {
        description: 'Highest APY',
        value: estimateApy,
      },
    ];
  }, [globalStats, totalWeekValue, estimateApy]);

  return (
    <>
      {/* <GeneralInformation
        title="All Bids"
        list={list}
        timestamp={minTimestampAutcionTime}
        history={monthResultedAuctions}
      /> */}
      <div className={styles.textContent}>
        <TextContent/>
      </div>
      
      <ul className={cn(styles.list, 'animate__animated animate__fadeIn')}>
        {collections.map((collection) => (
          <ProductCollection key={collection.id} collection={collection} />
        ))}
      </ul>
    </>
  );
};

export default memo(PageAuctionList);
