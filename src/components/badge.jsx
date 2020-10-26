import React from "react";
import { css } from "@emotion/core";

const Badge = () => {
  return (
    <span
      className="inline-block text-white px-4 rounded-full text-xs ml-2 mt-3"
      css={css`
        position: absolute;
        animation: beat 1s ease infinite alternate;
        background-color: #ff0000;
        @keyframes beat {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
      `}
    >
      On Sale
    </span>
  );
};

export default Badge;
