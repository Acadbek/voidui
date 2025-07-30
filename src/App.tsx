import Button from "./components/button";

export default function App() {
  return (
    <main className="p-6 space-y-10">
      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-md text-gray-600">Variants (default size=md, border=sm)</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link" type="button">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-md text-gray-600">Sizes</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Borders */}
      <section className="space-y-3">
        <h2 className="text-md text-gray-600">Border radius</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button border="zero">zero</Button>
          <Button border="xs">xs</Button>
          <Button border="sm">sm</Button>
          <Button border="md">md</Button>
          <Button border="lg">lg</Button>
          <Button border="full">full</Button>
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="text-md text-gray-600">States</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="danger" loading>
            Danger loading
          </Button>
          <Button variant="ghost" disabled>
            Ghost disabled
          </Button>
        </div>
      </section>

      {/* Mix & match */}
      <section className="space-y-3">
        <h2 className="text-md text-gray-600">Mix &amp; Match</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="ghost" size="sm" border="full">
            Ghost sm full
          </Button>
          <Button variant="success" size="lg" border="lg">
            Success lg
          </Button>
          <Button variant="danger" size="md" border="md" loading>
            Danger md loading
          </Button>
          <Button variant="link" size="md" type="button">
            Link as button
          </Button>
        </div>
      </section>
    </main>
  );
}
