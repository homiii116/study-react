
export function Headline(props) {
  return (
    <div>
        <h1 className="text-transform: capitalize">{props.page} Page</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing {props.children}
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  );
}
