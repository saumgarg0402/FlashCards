import React from 'react';
import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";
import { mergeStyleSets } from "@fluentui/merge-styles";
import { HeaderState } from "../constants";

interface HeaderProps {
    text: string;
    status: HeaderState;
}
const HeaderBasicStyles = mergeStyleSets({
    root: {
        width: '100%',
        height: 46,
        marginTop: 20,
    },
    headerText: {
        marginTop: 15
    },
    normal: {
        background: '#f39c12',
    },
    success: {
        background: '#2ecc71',
    },
    error: {
        background: '#e74c3c',
    }
});

const Header = (props: HeaderProps) => {

    const { text, status } = props;


    return (
        <Stack className={`${HeaderBasicStyles.root} ${HeaderBasicStyles[status]}`}>
            <Stack.Item align="center" className={HeaderBasicStyles.headerText}>
                <Text>{ props.text }</Text>
            </Stack.Item>
        </Stack>
    );
}

export default Header;