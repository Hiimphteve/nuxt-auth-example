import { NuxtAuthHandler } from "#auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NuxtAuthHandler({
    providers: [
        KeycloakProvider.default({
            clientId: useRuntimeConfig().auth.keycloak.clientId,
            clientSecret: useRuntimeConfig().auth.keycloak.clientSecret,
            issuer: useRuntimeConfig().auth.keycloak.issuer,
        })
    ],
    secret: useRuntimeConfig().auth.secret
})
