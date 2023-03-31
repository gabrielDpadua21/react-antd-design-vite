import React, { useState } from 'react';
import { themeDark, themeWhite } from './assets/themes';
import { Layout, ConfigProvider } from 'antd';
import 'antd/dist/reset.css'
import { Button, Space } from 'antd';


const App = () => {

  const [theme, setTheme] = useState(themeDark)

  const setThemeDark = () => {
    setTheme(themeDark)
  }

  const setThemeWhite = () => {
    setTheme(themeWhite)
  }

  return (
    <ConfigProvider
      theme={theme}
    >
      <Layout style={{ minHeight: '100vh' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block onClick={setThemeDark}>
          dark
        </Button>
        <Button block onClick={setThemeWhite}>
          light
        </Button>
        <Button type="text" block>
          text
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </Space>
      </Layout>
    </ConfigProvider>
  )
};

export default App;