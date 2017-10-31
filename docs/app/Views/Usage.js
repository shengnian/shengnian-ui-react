import React from 'react'
import pkg from 'package.json'
import { NavLink } from 'react-router-dom'

import {
  // shengnianUIDocsURL,
  // shengnianUIRepoURL,
  shengnianUICSSRepoURL,
} from 'docs/app/utils'

import {
  Button,
  Container,
  Header,
  List,
  Message,
  Segment,
} from 'src'
import Logo from '../Components/Logo/Logo'

const suiCSSVersion = pkg.devDependencies['shengnian-ui-scss'].replace(/[~^]/, '')

const Usage = () => (
  <Container id='usage-page'>
    <Segment basic textAlign='center'>
      <Logo centered size='small' />
      <Header as='h1' textAlign='center'>
        Shengnian UI React
        <Header.Subheader>
          {pkg.description}
        </Header.Subheader>
      </Header>
    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>JavaScript</Header>
      <p>
        The Shengnian UI React package can be installed via Yarn:
      </p>
      <Segment>
        <pre>$ yarn add {pkg.name}</pre>
      </Segment>
      <p>
        Installing Shengnian UI React provides the JavaScript for your components.
        You'll also need to include a stylesheet to provide the styling for your components.
        This is the typical pattern for component frameworks, such as Shengnian UI or Bootstrap.
      </p>
      <p>
        The method you choose to include the stylesheet in your project will depend on the level
        of customisation you require.
      </p>
      <Header as='h3'>Examples</Header>
      <p>
        For examples on how to import and use Shengnian UI React components,
        click the code icon next to any example. Here are a few direct links:
      </p>
      <ul>
        <li>
          <NavLink to='/elements/button#button-example-button'>Button</NavLink>
        </li>
        <li>
          <NavLink to='/elements/list#list-example-list'>List</NavLink>
        </li>
        <li>
          <NavLink to='/views/card#card-example-card'>Card</NavLink>
        </li>
        <li>
          <NavLink to='/modules/modal#modal-example-modal'>Modal</NavLink>
        </li>
      </ul>
    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>CSS</Header>

      {/* ----------------------------------------
       *  Content Delivery Network (CDN)
       * -------------------------------------- */}
      <Header as='h3'>Content Delivery Network (CDN)</Header>
      <p>
        You can use the default Shengnian UI stylesheet by including a Shengnian UI CDN link in your
        <em>index.html</em> file.
      </p>
      <p>
        This is the quickest way to get started with Shengnian UI React. You won't be able to use
        custom themes with this method.
      </p>
      <Segment>
        <pre>
          {'<link rel="stylesheet" href="//www.bootcdn.cn/shengnian-ui/'}
          {suiCSSVersion}
          {'/shengnian.min.css"></link>'}
        </pre>
      </Segment>

      {/* ----------------------------------------
       *  Shengnian-UI-CSS package
       * -------------------------------------- */}
      <Header as='h3'>Shengnian UI CSS package</Header>
      <p>
        The <a href={shengnianUICSSRepoURL}>Shengnian UI CSS package</a> is automatically synced with the
        main Shengnian UI repository to provide a lightweight CSS only version of Shengnian UI.
      </p>
      <p>
        Shengnian UI CSS can be installed as a package in your project using Yarn. You won't be able to
        use custom themes with this method.
      </p>
      <Segment>
        <pre>
          $ yarn add shengnian-ui-scss
        </pre>
      </Segment>
      <p>
        After install, you'll need to include the minified CSS file
        in your <em>index.js</em> file:
      </p>
      <Segment>
        <pre>
          import 'shengnian-ui-scss/css/shengnian.min.css';
        </pre>
      </Segment>

    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>Bundlers</Header>
      <p>
        Shengnian UI React is fully supported by all modern JavaScript bundlers. We made some example recipes with some
        of them. You can use them as start point for your projects.
      </p>

      <Header as='h3'>Webpack 1</Header>
      <p>
        Webpack 1 fully supports Shengnian UI React, however we don't recommend to use it because it's deprecated.
        Please ensure that you build your app in production mode before release, it will strip <code>propTypes</code>
        from your build.
      </p>
      <p>
        Because Webpack 1 doesn't support tree shaking we recommend to use <code>babel-plugin-lodash</code> in your
        builds. You can find example configuration in <code>examples</code> directory of Shengnian UI React.
      </p>

      <Button
        content='Example configuration'
        href='https://github.com/shengnian/shengnian-ui-react/tree/master/examples/webpack1'
        icon='github'
        labelPosition='left'
      />
      <Button
        content='babel-plugin-lodash'
        href='https://github.com/lodash/babel-plugin-lodash'
        icon='github'
        labelPosition='left'
      />

      <Header as='h3'>Webpack 2</Header>
      <p>
        Webpack 2 fully supports Shengnian UI React,
        it also supports tree shaking. Please ensure that you build your app
        in production mode before release, it will strip <code>propTypes</code> from your build.
      </p>

      <Message warning>
        <p>
          Webpack 2 tree shaking does not completely remove unused exports, there are numerous issues that are
          long-standing bugs:
        </p>
        <List>
          <List.Item
            icon='github'
            content={(
              <a
                href='https://github.com/webpack/webpack/issues/1750'
                rel='noopener noreferrer'
                target='_blank'
              >
                webpack/webpack#1750
              </a>
            )}
          />
          <List.Item
            icon='github'
            content={(
              <a
                href='https://github.com/webpack/webpack/issues/2867'
                rel='noopener noreferrer'
                target='_blank'
              >
                webpack/webpack#2867
              </a>
            )}
          />
          <List.Item
            icon='github'
            content={(
              <a
                href='https://github.com/webpack/webpack/issues/2899'
                rel='noopener noreferrer'
                target='_blank'
              >
                webpack/webpack#2899
              </a>
            )}
          />
          <List.Item
            icon='github'
            content={(
              <a
                href='https://github.com/webpack/webpack/issues/3092'
                rel='noopener noreferrer'
                target='_blank'
              >
                webpack/webpack#3092
              </a>
            )}
          />
        </List>
        <p>
          Shengnian UI React imports will be not optimized, so we recommend to use <code>babel-plugin-lodash</code> in
          your builds. You can find example configuration in <code>examples</code> directory.
        </p>
      </Message>

      <Button
        content='Example configuration'
        href='https://github.com/shengnian/shengnian-ui-react/tree/master/examples/webpack2'
        icon='github'
        labelPosition='left'
      />
      <Button
        content='babel-plugin-lodash'
        href='https://github.com/lodash/babel-plugin-lodash'
        icon='github'
        labelPosition='left'
      />
    </Segment>
  </Container>
)

export default Usage
