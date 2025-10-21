```sh {"id":"01HXWHH5JM1APT2V45NRAJ1WKX","promptEnv":"no"}
# export DOMAIN="https://runme-npfcsrpkg-stateful.vercel.app"
export DOMAIN="https://runme.dev"
# export DOMAIN="http://localhost:3001"
export INSIDERS="false"
```

```sh {"id":"01HXWHFK4YDRJN97944V2E9AYH","name":"stateful-ext","terminalRows":"15"}
curl -i "${DOMAIN}/api/stateful?repository=git@github.com:stateful/demo-customer.git&command=setup&fileToOpen=workflows/index.md&insiders=${INSIDERS}"
```

```sh {"id":"01HXWHFMQCBDSTZRVPPXE6ZBXS","name":"runme-ext","terminalRows":"15"}
curl -i "${DOMAIN}/api/runme?repository=git@github.com:stateful/demo-customer.git&command=setup&fileToOpen=workflows/index.md&insiders=${INSIDERS}"
```