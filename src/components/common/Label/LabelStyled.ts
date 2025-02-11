"use client";

import styled, { css } from "styled-components";

export const LabelWrapper = styled.div``;

export const Label = styled.div<{
  $colorTheme: "RED" | "WHITE" | "GRAY";
  $width?: string | number;
  $height?: string | number;
  $fontSize?: string | number;
  $fontWeight?: number;
  $mobileFontSize?: string;
}>`
  ${({ $colorTheme }) => themeStyles[$colorTheme]}

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height || "22px"};
  border-radius: 16px;
  padding: 10px 10px;

  font-size: ${({ $fontSize }) => $fontSize || "12px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};

  @media (max-width: 768px) {
    height: 18px;
    padding: 4px 6px;

    font-size: 10px;
  }
`;

const themeStyles = {
  RED: css`
    border: 1px solid var(--white-color);

    background: var(--baton-red);

    color: var(--white-color);
  `,

  WHITE: css`
    border: 1px solid var(--baton-red);

    color: var(--baton-red);
  `,
  GRAY: css`
    background: var(--gray-500);

    color: white;
  `,
};
