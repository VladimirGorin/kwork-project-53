import querystring from "querystring-es3";

const tg = window.Telegram.WebApp;
const TMA = tg?.initData

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const getUserId = () => {
        const decodedTMA = querystring.parse(TMA);

        if (!Object.keys(decodedTMA).length) {
            throw Error("Incorrect TMA");
        }
        const decodedUser = JSON.parse(decodedTMA.user)

        return decodedUser?.id
    }

    const id = getUserId()

    return {
        onClose,
        tg,
        id,
        TMA
    }
}
