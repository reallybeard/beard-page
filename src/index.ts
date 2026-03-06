export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#14120f">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
<title>Venice - Scheduled Maintenance</title>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #14120f;
    color: #0e2942;
    overflow: hidden;
  }

  .img-bg {
    position: fixed;
    inset: -30px;
    z-index: 0;
    background: url('/marble.jpg') center/cover no-repeat;
    transition: transform 0.3s ease-out;
    will-change: transform;
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
    background: rgba(20, 18, 15, 0.35);
  }

  #dust {
    position: fixed;
    inset: 0;
    z-index: 2;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 3;
    max-width: 700px;
    padding: 1rem;
    width: 90%;
    text-align: center;
    padding: 2.5rem;
  }

  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 2rem;
  }

  .top-bar .logotype {
    width: 120px;
    color: rgba(255, 255, 255, 0.9);
    flex-shrink: 0;
  }

  .top-bar .logotype svg {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.3));
  }

  .top-bar .socials {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .top-bar .socials a {
    width: 34px;
    height: 34px;
    color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .top-bar .socials a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .top-bar .socials svg {
    width: 15px;
    height: 15px;
  }

  .gold-mark svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 4px 16px rgba(201, 169, 110, 0.35));
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    border: 1px solid #c9a96e;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #c9a96e;
    animation: blink 2s ease-in-out infinite;
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4em;
    font-weight: 400;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
    color: #fff;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #fff;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .window {
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.65);
    margin-top: 1rem;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .gold-mark {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.25rem;
    color: #c9a96e;
    opacity: 0;
    animation: fadeIn 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s forwards;
  }

  .animate-text {
    opacity: 0;
    animation: fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  }

  .animate-text:nth-child(2) { animation-delay: 0.25s; }
  .animate-text:nth-child(3) { animation-delay: 0.35s; }
  .animate-text:nth-child(4) { animation-delay: 0.45s; }

  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #5b6a6c;
    background: rgba(14, 41, 66, 0.04);
    border: 1px solid rgba(14, 41, 66, 0.08);
    text-decoration: none;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }

  .socials a:hover {
    color: #0e2942;
    background: rgba(14, 41, 66, 0.08);
    border-color: rgba(14, 41, 66, 0.15);
  }

  .socials svg {
    fill: currentColor;
  }

  @media (max-width: 600px) {
    .top-bar .status {
      display: none;
    }
  }
</style>
</head>
<body>
<div class="img-bg"></div>
<div class="overlay"></div>
<canvas id="dust"></canvas>
<div class="top-bar">
  <div class="logotype"><svg viewBox="0 0 549 307" focusable="false"><g><path fill="currentColor" fill-rule="evenodd" d="M497.268 183.14c-.536-.427-1.159-.551-1.661-.551-.995 0-2.025.468-2.785 1.231l-.133.129-.094.154c-10.389 16.324-19.101 27.217-26.718 34.014-7.605 6.787-13.987 9.379-19.765 9.379-3.264 0-5.136-.943-6.248-2.305-1.168-1.43-1.765-3.64-1.765-6.702 0-4.797 1.412-10.473 3.646-16.409 2.146-5.703 5.011-11.545 7.972-16.921 11.151-3.305 24.207-9.263 32.725-16.78l.013-.01.012-.011c3.043-2.792 5.635-5.695 7.476-8.62 1.837-2.919 2.987-5.956 2.987-8.98 0-2.28-.644-4.663-2.386-6.483-1.756-1.838-4.412-2.871-7.961-2.871-7.029 0-15.972 3.346-24.577 9.021-8.645 5.699-17.136 13.868-23.231 23.772a68.002 68.002 0 0 0-5.341 10.545c-10.015 14.962-18.573 25.69-26.28 32.671-7.731 7.002-14.44 10.082-20.766 10.082-2.95 0-4.786-.962-5.93-2.387-1.195-1.487-1.836-3.726-1.836-6.619 0-5.625 1.886-12.392 5.015-19.722 3.118-7.305 7.412-15.041 12.101-22.568 5.309-8.519 10.581-15.865 15.351-21.06 2.386-2.6 4.607-4.616 6.605-5.971 2.023-1.372 3.66-1.958 4.916-1.958 1.328 0 2.509.767 3.758 2.544 1.261 1.794 2.335 4.257 3.525 7.009l1.72 3.969 7.779-14.144-1.13-.869c-3.558-2.737-8.395-4.315-13.915-4.315-18.89 0-37.458 14.146-47.806 30.806l-.002.002c-2.467 3.986-4.628 7.996-6.361 12.134l-8.023 12.4-.003.003c-5.852 9.091-10.924 16.903-15.932 22.457-5.019 5.567-9.687 8.537-14.675 8.537-2.08 0-3.496-.546-4.375-1.339-.856-.772-1.405-1.961-1.405-3.697 0-2.311.462-4.496 3.731-10.424 3.287-5.957 9.268-15.456 20.072-32.346l.003-.005 20.206-31.823-.895-4.471h-29.703l-.444.332c-.658.493-1.157 1.055-1.481 1.703a4.089 4.089 0 0 0-.424 1.86v1.662h10.505l-11.988 19.039c-3.486 5.562-6.583 10.665-9.155 15.591l-.01.007-6.856 10.158c-6.968 10.327-12.91 19.017-18.574 25.138-5.688 6.146-10.79 9.36-16.023 9.36-1.83 0-3.054-.483-3.806-1.175-.733-.672-1.231-1.737-1.231-3.366 0-1.915.754-4.334 2.971-8.16 2.208-3.811 5.751-8.827 11.084-15.896l7.69-10.171.001-.001c10.039-13.302 12.988-21.093 12.988-31.022 0-4.818-.687-9.084-2.526-12.196-1.922-3.253-5.02-5.097-9.308-5.097-5.702 0-11.91 2.909-18.41 7.9-6.533 5.017-13.558 12.29-20.927 21.371l-.175.216h-2.243v-12.938c0-4.737-.884-8.412-3.13-10.886-2.283-2.515-5.638-3.429-9.697-3.429h-9.111l-.487.486a6.468 6.468 0 0 0-1.678 3.005l-.516 2.066h10.8c3.113 0 4.644.556 5.417 1.232.705.617 1.108 1.631 1.108 3.556 0 1.862-.681 4.198-2.131 7.22-1.441 3.002-3.564 6.526-6.286 10.733l-.005.007-37.594 59.373h21.29l21.587-33.27 1.232-1.971c10.384-15.326 20.105-27.557 28.731-35.937 4.315-4.193 8.318-7.385 11.956-9.52 3.65-2.142 6.828-3.16 9.525-3.16 1.636 0 2.362.384 2.701.723.336.336.599.936.599 2.081 0 1.682-.704 3.924-2.457 7.067-1.738 3.117-4.408 6.948-8.115 11.767l-.001.002-8.187 10.668-.003.003c-10.504 13.756-15.475 24.783-15.475 35.743 0 3.976.633 8.46 2.632 12.011 2.065 3.668 5.569 6.274 10.939 6.274 7.505 0 14.389-4.984 20.784-11.897 4.565-4.934 9.051-11.041 13.504-17.497a54.764 54.764 0 0 0-.795 9.372c0 3.797.434 8.511 2.31 12.332.95 1.935 2.295 3.69 4.183 4.958 1.898 1.275 4.244 1.988 7.078 1.988 7.053 0 13.235-4.482 18.86-10.698 5.305-5.863 10.391-13.586 15.483-21.449a55.121 55.121 0 0 0-.266 5.426c0 7.057 1.664 13.736 5.031 18.703 3.404 5.022 8.544 8.266 15.239 8.266 7.376 0 14.643-3.235 22.4-9.78 6.525-5.504 13.485-13.424 21.256-23.948a55.253 55.253 0 0 0-.45 7.008c0 6.95 1.734 13.566 5.132 18.496 3.428 4.974 8.561 8.224 15.138 8.224 7.484 0 15.178-3.29 23.676-10.806 8.484-7.502 17.886-19.314 28.838-36.61l.257-.407v-.482c0-.708-.287-1.389-.871-1.856Zm-26.979-27.88c2.746-2.85 5.325-5.01 7.681-6.448 2.369-1.444 4.407-2.098 6.102-2.098 1.421 0 2.159.398 2.567.834.424.458.733 1.232.733 2.466 0 1.791-.759 3.957-2.313 6.393-1.446 2.264-3.514 4.652-6.055 7.033-.167.158-.339.316-.51.474l-.009.006.004-.004c-6.398 5.78-15.903 10.915-24.971 14.423 5.783-9.756 11.514-17.616 16.771-23.079Z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M219.919 185.478v-.482c0-.708-.288-1.389-.872-1.856-.533-.427-1.156-.551-1.658-.551-.997 0-2.025.468-2.788 1.231l-.129.129-.098.154c-10.388 16.324-19.099 27.217-26.717 34.014-7.604 6.787-13.987 9.379-19.764 9.379-3.265 0-5.137-.943-6.249-2.305-1.168-1.43-1.765-3.64-1.765-6.702 0-4.797 1.412-10.473 3.646-16.409 2.146-5.703 5.011-11.545 7.972-16.921 11.151-3.305 24.206-9.263 32.726-16.78l.011-.01.012-.011c3.045-2.792 5.638-5.695 7.479-8.62 1.836-2.919 2.984-5.956 2.984-8.98 0-2.28-.642-4.663-2.383-6.483-1.759-1.838-4.414-2.871-7.962-2.871-7.029 0-15.972 3.346-24.578 9.021-8.645 5.7-17.137 13.87-23.233 23.775-6.603 10.668-9.674 21.884-9.674 32.381 0 6.95 1.733 13.566 5.131 18.496 3.428 4.974 8.562 8.224 15.138 8.224 7.484 0 15.179-3.29 23.679-10.806 8.483-7.502 17.884-19.314 28.835-36.61l.257-.407ZM192.07 155.26c2.745-2.85 5.325-5.01 7.682-6.448 2.367-1.444 4.406-2.098 6.1-2.098 1.42 0 2.16.398 2.566.834.425.458.734 1.232.734 2.466 0 1.791-.757 3.957-2.313 6.393-1.543 2.415-3.791 4.972-6.57 7.51-6.401 5.78-15.901 10.914-24.971 14.422 5.784-9.756 11.513-17.616 16.772-23.079ZM165.572 131.717c2.393-3.453 4.77-6.885 7.142-10.276 15.641-22.37 30.467-43.562 46.547-59.182 16.055-15.596 33.176-25.453 53.38-25.453 7.016 0 14.275 1.211 20.545 3.382l1.546.535 2.156-5.927-1.694-.502C288.352 32.267 280.502 31 272.641 31c-21.723 0-40.08 10.525-56.738 26.547H99.27l-3.484 5.805h48.038c-12.562 6-21.808 16.07-28.733 26.938-8.398 13.178-13.475 27.675-16.947 37.845-3.735 10.684-6.804 20.53-9.624 29.576l-.002.009c-6.03 19.342-10.89 34.9-18.67 47.553-7.721 12.558-18.35 22.29-36.033 29.798l-1.815.77 4.16 6.471 1.375-.802c5.836-3.404 11.357-5.772 17.955-7.734 26.924-8.008 48.42-24.96 67.069-45.435 15.8-17.347 29.639-37.322 43.013-56.624Zm-96.063 87.232c9.76-8.666 17.662-18.346 24.745-30.404 7.841-13.349 14.678-29.612 21.918-50.642v.002-.003c1.918-5.537 3.693-11.065 5.422-16.452l.003-.009c5.111-15.919 9.803-30.49 16.69-41.113 6.808-10.499 15.649-16.976 29.159-16.976h42.722c-14.579 15.381-28.207 34.821-42.252 54.859l-.056.079c-27.565 39.325-56.777 80.918-98.351 100.659Z" clip-rule="evenodd"></path></g></svg></div>
    <div class="status"><span class="status-dot"></span>Maintenance in progress</div>
  <div class="socials">
    <a href="https://x.com/askvenice" aria-label="X" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <a href="https://www.instagram.com/askvenice/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
    <a href="https://discord.gg/askvenice" aria-label="Discord" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg></a>
  </div>
</div>
<div class="container">
  <div class="gold-mark"><svg viewBox="0 0 366 366" focusable="false"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M130.421 240.649a60.428 60.428 0 0 0-19.447-9.592c-7.328-2.081-15.358-2.816-23.209-1.944-7.852.871-15.525 3.352-22.22 6.99a60.47 60.47 0 0 0-16.874 13.627 60.564 60.564 0 0 0-10.987 18.713c-2.61 7.165-3.934 15.129-3.644 23.034.29 7.905 2.197 15.75 5.327 22.703a60.461 60.461 0 0 0 30.161 30.2c6.944 3.135 14.78 5.043 22.673 5.335 7.895.291 15.848-1.035 23.005-3.65a60.446 60.446 0 0 0 32.298-27.895c3.633-6.704 6.11-14.388 6.981-22.249.871-7.862.136-15.903-1.941-23.241a60.604 60.604 0 0 0-9.58-19.472l13.483-13.502 9.815 9.828h5.575l6.728-6.737v-5.581l-9.815-9.828L183 213.121l14.249 14.267-9.815 9.828v5.581l6.728 6.737h5.575l9.815-9.828 13.483 13.502a60.604 60.604 0 0 0-9.58 19.472c-2.077 7.338-2.812 15.379-1.941 23.241.871 7.861 3.348 15.545 6.981 22.249a60.446 60.446 0 0 0 32.298 27.895c7.156 2.615 15.11 3.941 23.005 3.65 7.894-.292 15.729-2.2 22.673-5.335a60.458 60.458 0 0 0 30.161-30.2c3.13-6.953 5.036-14.798 5.327-22.703.291-7.905-1.033-15.869-3.644-23.034a60.498 60.498 0 0 0-27.86-32.34c-6.695-3.638-14.368-6.119-22.22-6.99-7.852-.872-15.881-.137-23.209 1.944a60.428 60.428 0 0 0-19.447 9.592l-13.234-13.272 9.809-9.822v-5.581l-6.967-6.978h-5.575l-9.815 9.828-14.254-14.263 74.73-74.828 30.251 30.291v-31.516H332l-30.251-30.291L332 63.927v-5.583l-6.968-6.976h-5.575L183 188 46.542 51.367h-5.574L34 58.345v5.583l30.25 30.288L34 124.508h31.476v31.516l30.25-30.291 74.731 74.828-14.254 14.263-9.815-9.828h-5.575l-6.968 6.978v5.581l9.81 9.822-13.234 13.272Zm121.269 69.317c-3.077 6.32-2.438 15.078 1.524 20.883 3.64 6.013 11.339 10.217 18.359 10.026 7.019.191 14.719-4.013 18.359-10.026 3.961-5.805 4.6-14.563 1.524-20.883l.766-.827c6.312 3.098 15.071 2.471 20.878-1.495 6.015-3.641 10.223-11.359 10.03-18.395.193-7.035-4.015-14.753-10.03-18.395-5.807-3.965-14.566-4.593-20.878-1.495l-.766-.826c3.076-6.32 2.437-15.079-1.524-20.884-3.64-6.012-11.34-10.217-18.359-10.025-7.02-.192-14.719 4.013-18.359 10.025-3.962 5.805-4.601 14.564-1.524 20.884l-.766.826c-6.312-3.098-15.072-2.47-20.878 1.495-6.015 3.642-10.224 11.36-10.032 18.395-.192 7.036 4.017 14.754 10.032 18.395 5.806 3.966 14.566 4.593 20.878 1.495l.766.827Zm-138.906 20.883c3.961-5.805 4.6-14.563 1.523-20.883l.766-.827c6.312 3.098 15.071 2.471 20.879-1.495 6.014-3.641 10.223-11.359 10.03-18.395.193-7.035-4.016-14.753-10.03-18.395-5.808-3.965-14.567-4.593-20.879-1.495l-.766-.826c3.077-6.32 2.438-15.079-1.523-20.884-3.64-6.012-11.34-10.217-18.36-10.025-7.019-.192-14.719 4.013-18.359 10.025-3.961 5.805-4.6 14.564-1.523 20.884l-.766.826c-6.312-3.098-15.071-2.47-20.879 1.495-6.014 3.642-10.223 11.36-10.031 18.395-.192 7.036 4.017 14.754 10.031 18.395 5.808 3.966 14.567 4.593 20.879 1.495l.766.827c-3.077 6.32-2.438 15.078 1.523 20.883 3.64 6.013 11.34 10.217 18.36 10.026 7.019.191 14.719-4.013 18.359-10.026Z"></path><path d="M182.9 51.367 218.722 15.5l17.737 17.761v59.87l-49.124 49.188h-8.869l-49.124-49.188v-59.87L147.08 15.5l35.82 35.867Zm-35.82-23.308 31.386 31.428V117.2L147.08 85.774V28.059Zm40.257 31.428 31.386-31.428v57.715l-31.386 31.427V59.487Z"></path></g></svg></div>

  <h1 class="animate-text">Scheduled Maintenance</h1>

  <p class="animate-text">We're performing an infrastructure upgrade to support Venice's rapid growth. The app and API will be temporarily unavailable.</p>
  <p class="window animate-text">2026-03-08 // 11:30&ndash;12:00 UTC</p>

</div>
<script>
(function() {
  // --- Gold dust particles ---
  var c = document.getElementById('dust');
  var ctx = c.getContext('2d');
  var particles = [];
  var COUNT = 60;

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  var golds = [
    [218, 185, 110],
    [201, 169, 110],
    [240, 210, 140],
    [180, 150, 90]
  ];

  var card = document.querySelector('.container');

  function getCardRect() {
    return card.getBoundingClientRect();
  }

  function spawnParticle(onCard) {
    var col = golds[Math.floor(Math.random() * golds.length)];
    var rect = getCardRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var x, y;

    if (onCard) {
      // spawn on the card surface
      x = rect.left + Math.random() * rect.width;
      y = rect.top + Math.random() * rect.height;
    } else {
      // spawn along the card edges
      var edge = Math.floor(Math.random() * 4);
      if (edge === 0) { x = rect.left + Math.random() * rect.width; y = rect.top; }
      else if (edge === 1) { x = rect.left + Math.random() * rect.width; y = rect.bottom; }
      else if (edge === 2) { x = rect.left; y = rect.top + Math.random() * rect.height; }
      else { x = rect.right; y = rect.top + Math.random() * rect.height; }
    }

    // drift away from card center
    var angle = Math.atan2(y - cy, x - cx) + (Math.random() - 0.5) * 1.2;
    var speed = Math.random() * 0.4 + 0.15;

    return {
      x: x, y: y,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed - (Math.random() * 0.15 + 0.05),
      r: Math.random() * 2.2 + 0.3,
      o: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
      drift: Math.random() * 0.4 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 150,
      col: col
    };
  }

  for (var i = 0; i < COUNT; i++) {
    var p = spawnParticle(i % 3 === 0);
    p.life = Math.random() * p.maxLife;
    particles.push(p);
  }

  function drawDust() {
    ctx.clearRect(0, 0, c.width, c.height);
    var t = performance.now() / 1000;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.dx + Math.sin(t * 0.4 + p.phase) * p.drift * 0.2;
      p.y += p.dy + Math.cos(t * 0.3 + p.phase * 1.5) * 0.04;
      p.life++;

      // fade in then out over lifetime
      var lifePct = p.life / p.maxLife;
      var fadeIn = Math.min(lifePct * 5, 1);
      var fadeOut = Math.max(1 - (lifePct - 0.7) / 0.3, 0);
      var lifeFade = lifePct < 0.7 ? fadeIn : fadeIn * fadeOut;

      var twinkle = 0.4 + 0.6 * Math.sin(t * 1.8 + p.phase);
      var alpha = p.o * twinkle * lifeFade;
      var rgb = p.col[0] + ',' + p.col[1] + ',' + p.col[2];

      if (alpha > 0.01) {
        // outer glow
        if (p.r > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + rgb + ',' + (alpha * 0.08) + ')';
          ctx.fill();
        }

        // mid glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + (alpha * 0.2) + ')';
        ctx.fill();

        // core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + alpha + ')';
        ctx.fill();
      }

      // respawn when expired or off screen
      if (p.life >= p.maxLife || p.x < -50 || p.x > c.width + 50 || p.y < -50 || p.y > c.height + 50) {
        particles[i] = spawnParticle(Math.random() < 0.3);
      }
    }

    requestAnimationFrame(drawDust);
  }
  drawDust();

  // --- Background parallax on hover ---
  var bg = document.querySelector('.img-bg');
  var parallaxActive = false;

  function updateParallax(e) {
    if (!parallaxActive) return;
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var dx = (e.clientX - cx) / cx;
    var dy = (e.clientY - cy) / cy;
    var moveX = -dx * 20;
    var moveY = -dy * 20;
    bg.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
  }

  document.addEventListener('mousemove', updateParallax);

  document.addEventListener('mouseenter', function() {
    parallaxActive = true;
  });

  document.addEventListener('mouseleave', function() {
    parallaxActive = false;
    bg.style.transform = 'translate(0, 0)';
  });

})();
</script>
</body>
</html>`;

		return new Response(html, {
			status: 503,
			headers: {
				"content-type": "text/html;charset=UTF-8",
				"retry-after": "3600",
			},
		});
	},
} satisfies ExportedHandler;
