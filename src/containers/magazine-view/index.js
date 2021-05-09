import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '@components/magazines/issue-1/CoverPage'
import Page12 from '@components/magazines/issue-1/Page12'
import Page34 from '@components/magazines/issue-1/Page34'
import Page56 from '@components/magazines/issue-1/Page56'
import Page78 from '@components/magazines/issue-1/Page78'
import Page910 from '@components/magazines/issue-1/Page910'
import Page1112 from '@components/magazines/issue-1/Page1112'
import Page1314 from '@components/magazines/issue-1/Page1314'
import Page1516 from '@components/magazines/issue-1/Page1516'
import Page1718 from '@components/magazines/issue-1/Page1718'
import Page1920 from '@components/magazines/issue-1/Page1920'
import Page2122 from '@components/magazines/issue-1/Page2122'
import Page2324 from '@components/magazines/issue-1/Page2324'
import Page2526 from '@components/magazines/issue-1/Page2526'
import Page2728 from '@components/magazines/issue-1/Page2728'
import Page2930 from '@components/magazines/issue-1/Page2930'
import Page3132 from '@components/magazines/issue-1/Page3132'
import Page3334 from '@components/magazines/issue-1/Page3334'
import Page3536 from '@components/magazines/issue-1/Page3536'
import Page3738 from '@components/magazines/issue-1/Page3738'
import Page3940 from '@components/magazines/issue-1/Page3940'
import Page4142 from '@components/magazines/issue-1/Page4142'
import Page4344 from '@components/magazines/issue-1/Page4344'
import Page4546 from '@components/magazines/issue-1/Page4546'
import Page4748 from '@components/magazines/issue-1/Page4748'
import Page4950 from '@components/magazines/issue-1/Page4950'
import Page5152 from '@components/magazines/issue-1/Page5152'
import Page5354 from '@components/magazines/issue-1/Page5354'
import Page5556 from '@components/magazines/issue-1/Page5556'
import Page5758 from '@components/magazines/issue-1/Page5758'
import Page5960 from '@components/magazines/issue-1/Page5960'
import Page6162 from '@components/magazines/issue-1/Page6162'
import Page6364 from '@components/magazines/issue-1/Page6364'
import Page6566 from '@components/magazines/issue-1/Page6566'
import Page6768 from '@components/magazines/issue-1/Page6768'
import Page6970 from '@components/magazines/issue-1/Page6970'
import Page7172 from '@components/magazines/issue-1/Page7172'
import Page7374 from '@components/magazines/issue-1/Page7374'
import Page7576 from '@components/magazines/issue-1/Page7576'
import Page7778 from '@components/magazines/issue-1/Page7778'
import Page7980 from '@components/magazines/issue-1/Page7980'
import Page8182 from '@components/magazines/issue-1/Page8182'
import Page8384 from '@components/magazines/issue-1/Page8384'
import Page8586 from '@components/magazines/issue-1/Page8586'
import Page8788 from '@components/magazines/issue-1/Page8788'
import Backcover from '@components/magazines/issue-1/Backcover'

import MagazinePageWrapper from '@components/magazines/common/MagazinePageWrapper'
import ViewerSwitch from '@components/magazines/common/ViewerSwitch'

import styles from './styles.module.scss'

const MagazineViewer = props => {
  const {
    issueId,
    pageNumber,
    children,
    onSwitchViewer
  } = props
  return (
    <>
      <div className={styles.magazineViewerWrapper}>
        <div className={styles.contentWrapper}>
          <HTMLFlipBook 
            width={960}
            height={1497}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="demo-book"
          >
            <MagazinePageWrapper><CoverPage /></MagazinePageWrapper>
            <MagazinePageWrapper><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3738 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3738 /></MagazinePageWrapper>

            <MagazinePageWrapper><Page3738 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3738 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3940 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3940 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4142 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page4142 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4344 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page4344 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4546 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page4546 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4748 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page4748 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4950 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page4950 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page5152 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page5152 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page5354 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page5354 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page5556 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page5556 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page5758 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page5758 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page5960 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page5960 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6162 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page6162 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6364 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page6364 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6566 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page6566 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6768 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page6768 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6970 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page6970 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7172 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page7172 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7374 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page7374 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7576 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page7576 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7778 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page7778 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7980 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page7980 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page8182 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page8182 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page8384 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page8384 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page8586 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page8586 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page8788 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page8788 /></MagazinePageWrapper>
            <MagazinePageWrapper><Backcover /></MagazinePageWrapper>

          </HTMLFlipBook>
        </div>
      </div>
      <ViewerSwitch 
        viewers={['webview', 'mapview']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
}

export default MagazineViewer