export const PlusMinusButton = () => {
    return (
        <>
            <Button
                labelStyle={labelStyle ? labelStyle : styles.labelStyle}
                disabled={leftBtnDisable || disableControl}
                color={'#ffffff'}
                onPress={() => {
                    if (count - 1 <= 0) {
                        changeCount(0);
                        changeRightBtnDisable(false);
                        changeLeftBtnDisable(true);
                        changeValue(value + 1);
                    } else {
                        if (value < minReq) {
                            changeCount(count - minReq);
                            changeValue(value + minReq);
                            handlePress(value + minReq);
                        } else {
                            changeCount(count - 1);
                            changeValue(value + 1);
                            handlePress(value + 1);
                        }
                        changeRightBtnDisable(false);
                    }
                }}>
                +
            </Button>

        </>
    )
}