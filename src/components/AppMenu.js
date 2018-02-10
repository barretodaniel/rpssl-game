// @flow
import React from 'react';
import { Menu, Modal, Image } from 'semantic-ui-react';

export default function AppMenu() {
    return (
        <Menu secondary>
            <Modal trigger={<Menu.Item>RULES</Menu.Item>} size="small">
                <Modal.Content>
                    <Image fluid centered src="assets/img/rpssl.gif" />
                </Modal.Content>
            </Modal>
        </Menu>
    );
}
