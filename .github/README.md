<div align="center">
  
  <a href="">![License](https://img.shields.io/badge/license-MIT-blue)</a>

  
<h1 align="center">Bomba API</h1>
<img style="border-radius: 20px;" width=260 src="https://img.itch.zone/aW1nLzEyODg1OTQ3LnBuZw==/347x500/nahUWd.png" alt="apu" />
<br>
<h3>An API to prevent players from joining empty relay instances</h3>

</div>
<hr>

## Technologies

* Web Framework - **[Hono](https://hono.dev/)**
* Deployment - **[Cloudflare Workers](https://developers.cloudflare.com/workers/)**
* Database - **[Supabase](https://supabase.com/)**
* Jobs - **[Trigger.Dev](https://trigger.dev/)**


## Purpose

Circumvent the issue of a **Unity Relay Allocation** not shutting down shortly after a host player disconnects. This only applies to using **websockets(wss)** for transport.

## Problem

The use of Unity's Lobby Service is unnecessary for my game's requirements.

Currently, with how relay works with **wss**, client players can join an **empty relay instance**. After a duration (usually around 1 minute) they the relay instance will shutdown and clients will be disconnected.


## How does it work?


![](./assets/planning.png)


Join codes are deleted after a specified duration set in the ```wrangler.toml```.

### Auth

The API will only work with an authentication key of which only I have access to.

### Security

[Relevant Forum Post](https://discussions.unity.com/t/is-unity-remote-settings-secure/194993)

Technically Unity Remote Config isn't fully secure, but I feel its a decent enough workaround. 
There's very little incentive to be malicious (I hope 😶).


## Running Locally

Start the wrangler dev server

```
npm run dev
```
In a **separate** terminal, run the trigger.dev client

```
npm run trigger-client
```