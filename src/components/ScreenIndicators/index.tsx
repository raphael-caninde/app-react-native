import { View } from 'react-native';

interface ScreenIndicatorsProps {
  count: number;
  activeIndex: number;
  color: string;
}

export function ScreenIndicators({
  count,
  activeIndex,
  color
}: ScreenIndicatorsProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginVertical: 32,
      }}
    >
      {new Array(count).fill('1').map((_, i) => (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: i === activeIndex ? color : '#C1BCCC',
          }}
          key={i}
        />
      ))}
    </View>
  );
}
