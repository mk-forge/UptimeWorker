# Status Page

Status page for my projects, built on Cloudflare.

## Overview

Fork of UptimeWorker with custom modifications. It monitors my projects (Portfolio, Set Intersection, Table Tennis Manager), splits TTM into FE/BE/DB for granular monitoring and sends push notifications via ntfy on downtime. Granular monitoring for TTM (FE/BE/DB) added some complexity, but it was worth it because I can see exactly which part is failing without having to dig through logs. Make handles notification sending, since Cloudflare Workers can't talk to ntfy directly.

## Tech stack

- **Core:** TypeScript, React, Vite, TailwindCSS
- **Deploy:** Cloudflare Pages, Cloudflare Workers
- **Storage:** Cloudflare KV
- **Automation:** Make
- **Notifications:** ntfy

## Website

[Status Page](https://mk-forge-status.pages.dev)

## Screenshots

![Status page](screenshots/status-page.png)
![Status page detail](screenshots/status-page-detail.png)
![Make.com automation](screenshots/make-automation.png)
![Notification](screenshots/notification.png)

## Credits

Based on [UptimeWorker](https://github.com/UptimeWorker/UptimeWorker) by [slymb](https://github.com/slymb), licensed under [Apache-2.0](LICENSE).