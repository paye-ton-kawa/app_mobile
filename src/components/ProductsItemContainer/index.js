import { View, Text } from "react-native"
import React from "react"
import Item from "./item"
import style from "./style"

const ProductsItemContainer = (props) => {
	const { items, navigateTo } = props
	const noItems = !items || (items.length === 0 && true)

	return (
		<View style={style.container}>
			{items?.map((item) => (
				<Item
					key={item.id}
					id={item.id}
					name={item.name}
					urlPicture={item.urlPicture}
					navigateTo={navigateTo}
				/>
			))}
			{noItems && <NoItems />}
		</View>
	)
}

const NoItems = () => (
	<View>
		<Text>No items</Text>
	</View>
)

export default ProductsItemContainer
