"use client";

/**
 * Instagram link that behaves on phones: tries the Instagram app via its
 * URL scheme (no iOS "open in app?" hostage dialog), and only falls back
 * to the website in a new tab if the app didn't take over. On desktop it's
 * a plain new-tab link.
 */
export default function InstagramLink({
  username,
  className = "",
  children,
}: {
  username: string;
  className?: string;
  children: React.ReactNode;
}) {
  const webUrl = `https://www.instagram.com/${username}`;

  const onClick = (e: React.MouseEvent) => {
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isTouch) return; // desktop: normal link behavior

    e.preventDefault();
    const start = Date.now();
    // jump straight into the app if it's installed
    window.location.href = `instagram://user?username=${username}`;
    // if we're still here after a beat, the app isn't installed → web fallback
    setTimeout(() => {
      if (!document.hidden && Date.now() - start < 2000) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 1200);
  };

  return (
    <a
      href={webUrl}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
