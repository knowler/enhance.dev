export default function EmailThankPage({ html }) {
  return html`
    <style>
      .max-h-sm {
        max-height: 16rem;
      }
      .max-w-lg {
        max-width: 48rem;
      }
    </style>
    <link rel="stylesheet" href="/components/styles.css" />
    <div class="bg-p2 text-p1">
      <nav-bar></nav-bar>
      <div class="m-auto max-w-lg h-screen">
        <page-header>
          <span slot="title">Thank You!</span>
          <span slot="subtitle">
            We will let you know when Enhance is ready to try out!
          </span>
        </page-header>
      </div>
    </div>
  `
}
