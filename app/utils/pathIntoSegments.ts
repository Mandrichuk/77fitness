export default function pathIntoSegments(path: string) {
  const segments = path.split("/").filter((segment) => segment !== "");

  const formattedSegments = segments.map((segment, index) => {
    return `/${segment}`;
  });

  return formattedSegments;
}
