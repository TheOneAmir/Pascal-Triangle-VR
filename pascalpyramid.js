import React from 'react';

const distBetweenBoxes = 4;
const yDistBetweenBoxes = distBetweenBoxes * 1.2;
const initialZOffset = -29;
const initialXOffset = -2;
const levels = 5;
const initialYOffset = yDistBetweenBoxes * 2.8;
const depth0 = [[],[],[],[],[],[0,0,0,0,0,1,0,0,0,0,0],[],[],[],[],[]];
const depth1 = [[],[],[],[],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[],[],[],[]];
const depth2 = [[],[],[],[0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,2,0,0,0,0,0],[0,0,0,2,0,0,0,1,0,0,0],[0,0,0,0,0,2,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0],[],[],[]];
const depth3 = [[],[],[0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,3,0,0,0,0,0,0],[0,0,3,0,0,0,3,0,0,0,0],[0,0,0,0,6,0,0,0,1,0,0],[0,0,3,0,0,0,3,0,0,0,0],[0,0,0,0,3,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0],[],[]];
const depth4 = [[],[0,1,0,0,0,0,0,0,0,0,0],[0,0,0,4,0,0,0,0,0,0,0],[0,4,0,0,0,6,0,0,0,0,0],[0,0,0,12,0,0,0,4,0,0,0],[0,6,0,0,0,12,0,0,0,1,0],[0,0,0,12,0,0,0,4,0,0,0],[0,4,0,0,0,6,0,0,0,0,0],[0,0,0,4,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[]];
const depth5 = [[1,0,0,0,0,0,0,0,0,0,0],[0,0,5,0,0,0,0,0,0,0,0],[5,0,0,0,10,0,0,0,0,0,0],[0,0,20,0,0,0,10,0,0,0,0],[10,0,0,0,30,0,0,0,5,0,0],[0,0,30,0,0,0,20,0,0,0,1],[10,0,0,0,30,0,0,0,5,0,0],[0,0,20,0,0,0,10,0,0,0,0],[5,0,0,0,10,0,0,0,0,0,0],[0,0,5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0]];
const pyramid= [depth0,depth1,depth2,depth3,depth4,depth5];

export default class Pyramid extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<View>
				{pyramid.map((length, i) =>
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
												transform: [{translate: [j * distBetweenBoxes - distBetweenBoxes * levels,-i * yDistBetweenBoxes + initialYOffset, -k * distBetweenBoxes + initialZOffset]}]
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