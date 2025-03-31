import { StyledNavButton, PrimaryButton, SecondaryButton } from "./style";

const Button = ({ children, navigation, primary, secondary }) => {
  return (
    <>
      {navigation && (
        <StyledNavButton>
          <p>{children}</p>
        </StyledNavButton>
      )}

      {primary && (
        <PrimaryButton>
          <p>{children}</p>
        </PrimaryButton>
      )}

      {secondary && (
        <SecondaryButton>
          <p>{children}</p>
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;
