const tg = window.Telegram;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    return {
        onClose,
        tg,
        TMA: tg?.WebView?.tgWebAppData,
    }
}
