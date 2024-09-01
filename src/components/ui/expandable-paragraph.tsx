"use client";

import { useState } from "react";
import { Button } from ".";

interface ExpandableParagraphProps {
  className?: string;
  text: string;
  limit?: number;
}

const ExpandableParagraph = ({
  className,
  text,
  limit = 255,
}: ExpandableParagraphProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const content = isExpanded ? text : text.slice(0, limit);
  const isTruncated = text.length > limit;

  return (
    <p className={className}>
      {content}
      {isTruncated && !isExpanded ? "... " : " "}
      {isTruncated && !isExpanded && (
        <Button variant="link" onClick={() => setIsExpanded(true)}>
          Read more
        </Button>
      )}
      {isExpanded && (
        <Button variant="link" onClick={() => setIsExpanded(false)}>
          Show less
        </Button>
      )}
    </p>
  );
};

export default ExpandableParagraph;
