import React, { useState } from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import { mergeStyleSets } from "@fluentui/merge-styles";
import { Text } from "@fluentui/react/lib/Text";
import Header from "./Header";
import { 
    HeaderState, 
    SubmitButtonText,
    CheckButtonText,
    ResetButtonText, 
} from "../constants";
import { PrimaryButton } from "@fluentui/react/lib/Button";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CircularSlider from "@fseehawer/react-circular-slider";

interface FlashCardBasicProps {
    question: string;
    answer: number;
    category: string;
}

const FlashCardBasicStyles = mergeStyleSets({
    root: {
        border: '1px solid #DEECF9',
        width: 300,
        height: 500,
        background: '#C7E0F4',
        borderRadius: 10,
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    question: {
        width: '100%',
        height: 131,
        background: '#EFF6FC'
    }
})

const FlashCardBasic = (props: FlashCardBasicProps) => {

    const {question, answer , category} = props;
    const [headerText, setHeaderText] = useState<string>(category);
    const [headerStatus, setHeaderStatus] = useState<HeaderState>('normal');
    const [sliderValue, setSliderValue] = useState<number>(0);

    const onSubmitAnswer = () => {
        if(headerStatus !== 'normal') {
            setHeaderText(category);
            setHeaderStatus('normal');
        } else {
            if(sliderValue === answer){
                setHeaderText("You are correct!!");
                setHeaderStatus('success');
            } else {
                setHeaderText("OOPS!! Missed this one.");
                setHeaderStatus('error');
            }
        }
    }

    const setAnswer = () => setSliderValue(answer);

    return (
        <Stack className={FlashCardBasicStyles.root} tokens={{ childrenGap: 20}} data-testid={"flash-card-basid"}>
            <Stack.Item>
                <Header text={headerText} status={headerStatus}/>
            </Stack.Item>
            <Stack horizontal={true} horizontalAlign="space-around" className={FlashCardBasicStyles.question}>
                <Text variant="xLarge" block={true} nowrap={true} styles={{ root: { padding: 10}}}>{ question }</Text>
            </Stack>
            <Stack.Item align="center">
                <CircularSlider
                    label=" "
                    width={200}
                    labelColor="#000"
                    knobColor="#00188f"
                    progressColorFrom="#0078d4"
                    progressColorTo="#0078d4"
                    progressSize={20}
                    trackColor="#eeeeee"
                    trackSize={20}
                    dataIndex={sliderValue}
                    min={0}
                    max={100}
                    appendToValue={'%'}
                    onChange={setSliderValue}
                    valueFontSize={'2rem'}
                />
            </Stack.Item>
            <Stack horizontal={true} horizontalAlign="space-around">
                <PrimaryButton text={ headerStatus === 'normal' ? SubmitButtonText : ResetButtonText} onClick={onSubmitAnswer}/>
                <PrimaryButton text={CheckButtonText} onClick={setAnswer}/>
            </Stack>
        </Stack>
    )
}

export default FlashCardBasic;