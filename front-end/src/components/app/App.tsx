import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Logo from '@App/components/Logo';
import DropdownList from '@App/components/DropdownList';

import Fetcher from '../../util/Fetcher';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {

}

interface AppState {

}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component<AppProps, AppState> {
  public state = {
    recipients: []
  };

  public constructor(props: AppProps) {
    super(props);
  }

  componentWillMount() {
    this.fetchRecipients();
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <DropdownList recipients={this.state.recipients} />
        </AppContainer>
      </>
    );
  }

  private async fetchRecipients() {
    const body = await Fetcher.getRecipients();
    if (body == null) {
      alert('There was problem fetching the recipients! Please refresh!');
    } else {
      this.setState({ recipients: body });
    }
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => { };

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => { };

export default connect(mapStateToProps, mapDispatchToProps)(App);