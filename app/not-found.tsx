import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-navy">
      <Container className="text-center">
        <h1 className="font-heading text-6xl font-extrabold text-white">404</h1>
        <p className="mt-4 text-lg text-cream/60">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8">
          <Button as="a" href="/">
            Back to Home
          </Button>
        </div>
      </Container>
    </main>
  );
}
