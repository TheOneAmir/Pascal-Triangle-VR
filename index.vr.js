import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Pano,
  StyleSheet,
  Model,
  Text,
  View,
} from 'react-vr';
import Walk from 'react-vr-walk'

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontSize: 0.4
  },
  red: {
	color: 'red'
  },
});

const distBetweenBoxes = 4;
const yDistBetweenBoxes = distBetweenBoxes * 1.2;
const initialZOffset = -19;
const initialXOffset = -2;
const initialYOffset = -3.8;

class Pyramid extends React.Component{
	constructor(){
		super();
		this.state={
			pyramid: [[[],[],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[],[0],[0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,0,0],[0]],[[],[0],[0,0,1,0,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,2,0,0,0,1,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,0,0,0,0,0]],[[],[0,1,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0,0],[0,3,0,0,0,3,0,0,0],[0,0,0,6,0,0,0,1,0],[0,3,0,0,0,3,0,0,0],[0,0,0,3,0,0,0,0,0],[0,1,0,0,0,0,0,0,0]],[[1,0,0,0,0,0,0,0,0],[0,0,4,0,0,0,0,0,0],[4,0,0,0,6,0,0,0,0],[0,0,12,0,0,0,4,0,0],[6,0,0,0,12,0,0,0,1],[0,0,12,0,0,0,4,0,0],[4,0,0,0,6,0,0,0,0],[0,0,4,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0]]],
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
									<View key={k}>
										<Model   
											source={{
											obj: asset(depth + 'l' + i + '.obj'),
											mtl: asset(depth + 'l' + i + '.mtl'),
										  }}
											  style={{
												scaleX: 0.01,
												transform: [{translate: [j * distBetweenBoxes - distBetweenBoxes * 4,-i * yDistBetweenBoxes + initialYOffset, -k * distBetweenBoxes + initialZOffset]}]
											  }}
										 />	
									</View>
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
	    <Walk panoSource={asset('black-background.jpg')}
            speed={1}>				
			<Pyramid />
		</Walk>
      </View>
    );
  }
};

AppRegistry.registerComponent('Pascal_Triangle_VR', () => Pascal_Triangle_VR);
