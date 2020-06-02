import * as React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiIcon,
} from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_light.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <span>
                  <EuiIcon type="logoElastic" size="xxl" />{' '}
                  <EuiIcon type="faceHappy" size="xxl" />
                </span>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>Icons should be visible above</EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
