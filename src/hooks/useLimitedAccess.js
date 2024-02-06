import toast from "react-hot-toast";
import { useSettings } from "../features/settings/useSettings"

export function useLimitedAccess()  {
    const { settings } = useSettings();

    const limitedAccess = (onAccess, onLimited) => {
        console.log('limitedAccess --> onAccess ', onAccess)
        console.log('limitedAccess --> onLimited ', onLimited)
        console.log('limitedAccess --> settings.limitedAccess ', settings.limitedAccess)
        if (settings.limitedAccess === true) {
            toast.error("This user access is limited. This functionality is blocked.")
            if (onLimited) {
                onLimited();
            }
        }else{
            if (onAccess) {
                onAccess();
            }
        }
    }

    return { limitedAccess }
}
