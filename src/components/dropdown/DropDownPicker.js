import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables, {height_screen, width_screen} from '../../utils/utils';
import Heading from '../text/Heading';

function DropDownPicker({label, items, onSelection, zIndex = 1}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const defaultItem = items[0];

  const _handleMenu = e => {
    onSelection(e);
    setOpenMenu(!openMenu);
    setSelectedItem(e);
  };
  return (
    <>
      <View style={[styles.main, variables.shadowStyle(5), {zIndex: zIndex}]}>
        <View style={styles.labelView}>
          <Heading
            fontFamily={variables.interFontRegular}
            color={variables.colorFontLight}
            size={variables.getSize(12)}
            style={{textAlign: 'left'}}>
            {label}
          </Heading>
        </View>

        <Pressable
          onPress={() => {
            _handleMenu();
          }}
          style={{
            flex: 0.5,
            flexDirection: 'row',
          }}>
          <Heading
            fontFamily={variables.interFontRegular}
            color={variables.colorFontDark}
            size={variables.getSize(11)}
            noOfLines={1}
            style={styles.item}>
            {selectedItem ? selectedItem : defaultItem}
          </Heading>
          <Icon name="caret-down" color={variables.colorPrimary} size={12} />
        </Pressable>
        {openMenu ? (
          <Menu
            menuItems={items}
            onSelect={e => {
              _handleMenu(e);
            }}
          />
        ) : null}
      </View>
    </>
  );
}

export default DropDownPicker;

const Menu = ({menuItems, onSelect}) => {
  return (
    <View
      style={{
        maxHeight: height_screen * 0.4,
        width: width_screen * 0.9,
        position: 'absolute',
        zIndex: 1,
        top: '102%',
      }}>
      <ScrollView>
        {menuItems.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={styles.menu}
              onPress={() => {
                onSelect(item);
              }}>
              <Heading
                fontFamily={variables.interFontRegular}
                color={variables.colorFontDark}
                size={variables.getSize(11)}
                noOfLines={1}
                style={styles.item}>
                {item}
              </Heading>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: height_screen * 0.085,
    backgroundColor: variables.colorWhite,
    width: width_screen * 0.9,
    borderRadius: variables.getSize(2.5),
    paddingHorizontal: '5%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  labelView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  item: {flex: 1, textAlign: 'left'},
  menu: {
    width: '100%',
    padding: '2.5%',
    paddingHorizontal: '2.5%',
    backgroundColor: variables.colorWhite,
    borderWidth: 0.5,
    borderColor: variables.colorBorder,
  },
});
