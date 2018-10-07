import React from 'react';
import Dummy from './Dummy'
import { Layout, Menu, Icon } from 'antd';
import "../App.css";
const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      itemSelected:1,
    });
  }

  handleSelect = (item) => {
  	console.log(item.key);
  	this.setState({itemSelected: item.key})
  }


  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={(item, event) => this.handleSelect(item, event)}>
            <Menu.Item key="1">
              <Icon type="plus" />
              <span>Create a new Questionnaire </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="folder" />
              <span>Questionnaire 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="folder" />
              <span>Questionnaire 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
           <div>
           		<Dummy currentMenu={this.state.itemSelected}/>
           </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
