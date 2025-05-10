/**
 * 1. how to use import in node js what do we need to change in package.json file
 * ans we need to change type="module" in package.json
 *
 * 2. how to read port on server
 * ans always read from the env file not given hard coded.
 *
 * json formatter
 * Cors provide the safety to the application. if your url is different it is also cors origin or your port is also cors origin. Url and port number should be same then cors origin will not throw error.
 * So how to handle this error.
 * We can make the url whitelist by the backend developer
 *
 * npm cors
 *
 * how to handle cors error in development
 * using cors package and create middleware in the backend
 *
 * we can also handle by frontend using proxy in vite.config.js
 *
 * we can also allow the IP as white list in backend using header
 * 
 * 
 * | Method                              | Environment | Recommended in Prod? | Notes                            |
| ----------------------------------- | ----------- | -------------------- | -------------------------------- |
| `cors` middleware in Node.js        | Dev + Prod  | ✅ Yes                | Easy & safe                      |
| Vite/React proxy (`vite.config.js`) | Dev only    | ❌ No                 | Only for development convenience |
| Nginx reverse proxy                 | Production  | ✅ Yes                | Industry standard                |
| Manually set headers                | Dev + Prod  | ⚠️ Use with care     | Use if no middleware used        |

to create the node app we can use - stackblitz

export const User = mongoose.model("User", userSchema)
//when User name is store in database it will be store in lowercase letter.

agar hm users dete h to tbhi users ke name se store hoga
 */
