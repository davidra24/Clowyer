import { Cache } from "react-native-cache";
import {AsyncStorage} from 'react-native'
var cache = new Cache({
    namespace: "myapp",
    policy: {
        maxEntries: 50000
    },
    backend: AsyncStorage
});
export function setItemCache(itemKey, value){
  cache.setItem(itemKey, value, function(err) {
  });
}
export function getItemCache(itemKey){
  cache.getItem(itemKey, function(err, value) {
      return value;
  });
}
export function removeItemCache(itemKey){
  cache.removeItem(itemKey, function(err) {
  });
}
