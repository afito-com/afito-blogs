import React from 'react';
import Helmet from 'react-helmet';
import { Header, Footer, ThemeProvider, ModalProvider } from 'afito-ui';
import { createUser } from '../api/registration';
import { signIn, signOut, saveToken } from '../api/authentication';
import { getUser } from '../api/user';
import './Layout.scss';

class Layout extends React.Component {
  state = {};

  async componentDidMount() {
    try {
      const userRes = await getUser();
      if (userRes) {
        this.setState({
          user: {
            ...userRes.data.user,
            name: JSON.parse(userRes.data.user.name),
            address: JSON.parse(userRes.data.user.address)
          }
        });
      }
    } catch (err) {
      console.error('Set User Error: ', { err });
    }
  }

  render() {
    const { children } = this.props;
    //const rootPath = `${__PATH_PREFIX__}/`

    return (
      <ThemeProvider theme={{}}>
        <ModalProvider>
          <Helmet>
            <script src="https://kit.fontawesome.com/1edafdad69.js" crossOrigin="anonymous" />
          </Helmet>
          <Header
            dark={false}
            user={this.state.user}
            createUser={createUser}
            signIn={signIn}
            signOut={signOut}
            saveToken={saveToken}
          />
          <div className="Layout">{children}</div>
          <Footer />
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

export default Layout;
