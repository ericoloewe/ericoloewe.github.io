"use client";

export function Footer() {
  return (
    <footer>
      <Copyright />
    </footer>
  )
}

function Copyright({ sm }: any) {
  return <p className={`copyright ${sm ? 'sm' : 'lg'}`}>&copy; {new Date().getFullYear()}&nbsp;-&nbsp;<a href="https://instagram.com/ericoloewe">@ericoloewe</a></p>;
}

