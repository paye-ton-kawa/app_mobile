import React from "react"
import { allStyles } from "./styles"
import ProductsItemContainer from "@components/ProductsItemContainer"
import { ScrollView } from "react-native"
import items from "./fakeData.json"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const All = () => {
	const { top, left, bottom, right } = useSafeAreaInsets()
	return (
		<ScrollView style={[allStyles.container, { paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }]}>
			<ProductsItemContainer
				items={items}
				navigateTo="oneProduct"
			/>
		</ScrollView>
	)
}

export default All
