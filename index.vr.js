import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Pano,
  StyleSheet,
  Text,
  View,
} from 'react-vr';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontSize: 0.4
  },
  red: {
	color: 'red'
  },
});

const distBetweenBoxes = 0.14;
const initialZOffset = -1;
const initialYOffset = -0.2;

class Pyramid extends React.Component{
	constructor(){
		super();
		this.state={
			pyramid: [[[0],[0],[0,0,1,,0,0],[0],[0]],[[0],[0,1,0,1,0],[0,0,0],[0,1,0,1,0],[0]],[[1,0,2,0,1],[0,0,0,0,0],[2,0,0,0,2],[0,0,0,0,0],[1,0,2,0,1]]],
			triangle: [[0,1,0],[1,0,1]],
			line: [0,1,2],
		};
	}

	render(){
		return(
			<View>
				{this.state.pyramid.map((length, i) =>
					<View key={i}>
						{length.map((height, j) =>
						    <View key={j}>
								{height.map((depth, k) => 							
									<Box key={k}
										  dimWidth={depth == 0 ? 0 : 0.1}
										  dimDepth={depth == 0 ? 0 : 0.1}
										  dimHeight={depth == 0 ? 0 : 0.1}
										  style={{
											transform: [{translate: [j * distBetweenBoxes - distBetweenBoxes * 2,-i * distBetweenBoxes + initialYOffset, -k * distBetweenBoxes + initialZOffset]}]
										  }}
										  opacity={90}
										  wireframe={true}
									/>
								)}
							</View>
						)}
					</View>
				)}
			</View>
		)
	}
	
};

class ColorChange extends React.Component{
	constructor(){
		super();
		this.state = {
			textColor: 'white'
		};
	}
	
	render(){
		return (
			<Text
				style={{
					backgroundColor: '#777879',
					fontSize: 0.8,
					fontWeight: '400',
					layoutOrigin: [0.5, 0.5],
					color:this.state.textColor,
					paddingLeft: 0.2,
					paddingRight: 0.2,
					textAlign: 'center',
					textAlignVertical: 'center',
					transform: [{translate: [0, 0, -3]}],
				}}
				onEnter={() => this.setState({textColor:'red'})}
				onExit={() => this.setState({textColor:'white'})}>
				Text
			</Text>	
		)
	}
};

export default class Pascal_Triangle_VR extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('black-background.jpg')}/>		
		<Pyramid />
      </View>
    );
  }
};

AppRegistry.registerComponent('Pascal_Triangle_VR', () => Pascal_Triangle_VR);
