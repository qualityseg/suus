import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';

import Gentelella from '../src';
import SideBar from "../src/layout-structure/sidebar";
import SideBarTitle from "../src/layout-structure/sidebar-title";
import ProfileQuickInfo from "../src/layout-structure/profile-quick-info";
import TopNavigation from "../src/layout-structure/top-navigation";
import TopMenu from "../src/menus/top-nav-menu";
import TopMenuItem from "../src/menus/top-nav-menu-item";
import PageContent from "../src/layout-structure/page-content";
import Footer from "../src/layout-structure/footer";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

stories.add('Blank page', () => (
    <Gentelella fixedFooter={true}>
        <SideBar>
            <SideBarTitle />
            <ProfileQuickInfo name="Jane Doe"/>
        </SideBar>

        <TopNavigation>
            <TopMenu>
                <TopMenuItem>
                    <a href="javascript:"> Profile</a>
                </TopMenuItem>
                <TopMenuItem>
                    <a href="javascript:">
                        <span className="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                    </a>
                </TopMenuItem>
                <TopMenuItem>
                    <a href="javascript:">Help</a>
                </TopMenuItem>
            </TopMenu>
        </TopNavigation>

        <PageContent>Test!</PageContent>

        <Footer>
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
        </Footer>
    </Gentelella>
));