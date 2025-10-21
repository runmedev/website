---
runme:
  id: 01JDR0YPN9J06QT9CNP227H532
  version: v3
---

Map localhost.runme.dev to your localhost IP address in your hosts file.

```sh {"id":"01JDR1MJBZVP3BNHFG1TECDQQS"}
echo "127.0.0.1   localhost.runme.dev" | sudo tee -a /etc/hosts > /dev/null
```

Set the following variables to the appropriate values for your system, here's an example for staging:

```sh {"id":"01JDR1GQQ8HFG7ETR4KES594TK"}
{
  echo "CLOUD_API_BASE_URL=http://localhost:4000"
  echo "NEXT_PUBLIC_AUTH0_DOMAIN=stateful-staging.us.auth0.com"
  echo "NEXT_PUBLIC_AUTH0_CLIENT_ID=ttOYnmnhxtD4pVhBksH4XUDvjxerKaCw"
  echo "NEXT_PUBLIC_AUTH0_AUDIENCE=https://staging.us-central1.stateful.com/"
} >> .env
```

Start your platform project

```sh {"id":"01JDR1VBYWNDNJP1N90G8PJSS9"}
cd ../platform

yarn rw dev
```

Create a dev playground in your database

```sh {"id":"01JDR1Q208Z3WY22AF0NM2963S"}
cd ../platform

yarn rw exec playgrounds/dev
```

Run the project to support https

```sh {"id":"01JDR1EQYQVCSR81NF8J82R3JZ"}
npm run dev:https
```

##### Instructions for Linux

If you're on Linux, you've to configure authbind to allow the server to bind to port 443. Run the following commands:

```sh {"id":"01JCNZ2J58BTPYXMX8CFJQPJ64"}
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo touch /etc/authbind/byport/443

sudo chmod 500 /etc/authbind/byport/80
sudo chmod 500 /etc/authbind/byport/443
```

From now on, you should use authbind to run Redwood

```sh {"id":"01JCNZ3870REBAVHED4KH55KJZ"}
authbind --deep yarn rw dev
```