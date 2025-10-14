import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <div>Tanstack Start を Vercel に デプロイ</div>;
}
