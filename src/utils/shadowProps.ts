export function useShadowProps() {
  function getShadowProps() {
    return {
      elevation: 10,
      shadowColor: '#FFF',
      shadowOpacity: 0.05,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: -3 },
    }
  }

  const shadowProps = getShadowProps()

  return shadowProps
}
