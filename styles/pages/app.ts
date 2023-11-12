import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '$gray900',
  transition: 'background-color 0.6s ease',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$borderBottomMenu',
  width: '100%',
  margin: '0 auto'
})

export const Menu = styled('nav', {
})

export const DarkSwitch = styled('div', {
  padding: '0.25rem',
})

export const Logo = styled('div', {
})