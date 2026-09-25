# Status Page

Status page for my projects, built on Cloudflare.

## Overview

Fork of UptimeWorker with custom modifications. It monitors my projects (Portfolio, Set Intersection, Table Tennis Manager) and splits TTM into FE/BE/DB for granular monitoring. The granular split was a bit of a pain to set up, but now I can see exactly which part is failing. Cloudflare Workers can't talk to ntfy directly, so Make sits in between for push notifications on downtime.

## Tech stack

- **Core:** TypeScript, React, Vite, TailwindCSS
- **Deploy:** Cloudflare Pages, Cloudflare Workers
- **Storage:** Cloudflare KV
- **Automation:** Make
- **Notifications:** ntfy

## Website

[Status Page](https://mk-forge-status.pages.dev)

## Screenshots

![Status page](https://raw.githubusercontent.com/mk-forge/status-page/main/Screenshots/status_page.png)
![Status page detail](https://raw.githubusercontent.com/mk-forge/status-page/main/Screenshots/status_page_detail.png)
![Make automation](https://raw.githubusercontent.com/mk-forge/status-page/main/Screenshots/make_automation.png)
![Ntfy notification](https://raw.githubusercontent.com/mk-forge/status-page/main/Screenshots/ntfy_notification.png)

## Credits

Based on [UptimeWorker](https://github.com/UptimeWorker/UptimeWorker) by [slymb](https://github.com/slymb), licensed under [Apache-2.0](LICENSE).