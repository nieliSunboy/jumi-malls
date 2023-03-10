import { mapRouterConfig } from "../router/config"
import { userStore } from "../store/userStore";

const navRouterPath = ['/'];

export const getNavList = () => {
    var result: any = [];
    mapRouterConfig.forEach(router => {
        if (navRouterPath.indexOf(router.path) >= 0) {
            result = router.children?.filter(v => v.children && v.parent);
        }
    })

    return result;
}

export const getSiderMunes = () => {
    var result: any = [];
    mapRouterConfig.forEach(router => {
        if (navRouterPath.indexOf(router.path) >= 0) {
            const route = router.children?.find(v => userStore.navRouter === v.path);
            result = route?.children;
        }
    })

    return result;
}