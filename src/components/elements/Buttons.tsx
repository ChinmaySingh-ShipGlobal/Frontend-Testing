import { Button } from "@/components/ui/button";

export default function Buttons() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <div className="m-2">
            <Button variant="default">Default/Primary</Button>
          </div>
          <div className="m-2">
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="m-2">
            <Button variant="outline">Outline 1</Button>
          </div>
          <div className="m-2">
            <Button
              variant="outline"
              className="border border-primary text-primary hover:text-primary"
            >
              Outline 2
            </Button>
          </div>
          <div className="m-2">
            <Button
              variant="outline"
              className="border border-secondary text-secondary hover:text-secondary"
            >
              Outline 3
            </Button>
          </div>
          <div className="m-2">
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="m-2">
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="m-2">
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <div className="m-2">
            <Button size="default">Default</Button>
          </div>
          <div className="m-2">
            <Button size="sm">Small</Button>
          </div>
          <div className="m-2">
            <Button size="lg">Large</Button>
          </div>
          <div className="m-2">
            <Button size="icon">
              <i>i</i>
            </Button>
          </div>
          <div className="m-2">
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
