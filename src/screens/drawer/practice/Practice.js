import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import ViewSlider from 'react-native-view-slider';

import Appbar from '../../../components/views/Appbar';
import styles from './style';
import MENUICON from '../../../assets/icons/menu.svg';
import CustomTextInput from '../../../components/inputText/CustomTextInput';
import SearchIcon from '../../../assets/icons/search.svg';
import variables, {height_screen, width_screen} from '../../../utils/utils';
// import Video from 'react-native-video';

import PractiseCard from '../../../components/views/cards/PractiseCard';
import CoursesCard from '../../../components/views/cards/CoursesCard';
import LiveClassCard from '../../../components/views/cards/LiveClassCard';
import Heading from '../../../components/text/Heading';
import DiscoverVideoLecture from '../../../components/views/DiscoverVideoLecture';
import CoursesNotesView from '../../../components/views/CoursesNotesView';
import {
  DummyUrl,
  SLIDER1,
  SLIDER2,
  SLIDER3,
  SLIDER4,
} from '../../../constants/constants';
import ThinButton from '../../../components/buttons/ThinButton';
import BannerView from '../../../components/views/banners/BannerView';

function Practice({navigation}) {
  const [selectedBanner, setSelectedBanner] = useState(0);
  let current = selectedBanner;
  useEffect(() => {
    setTimeout(() => {
      if (current < 4) {
        setSelectedBanner(current + 1);
      } else {
        current = 0;
        setSelectedBanner(0);
      }
    }, 2000);
  }, [selectedBanner]);
  const _handleBanners = () => {
    switch (selectedBanner) {
      case 0:
        return (
          <BannerView
            gradient={variables.bannerGradient1}
            title={'Start your preparation'}
            description={'Let’s get you started with your exams preparation.'}
            image={SLIDER1}
            multiButtons={true}
            buttonTitle1={'O & A Level'}
            buttonPress1={() => {}}
            buttonTitle2={'Entry Test Preparation'}
            buttonPress2={() => {}}
          />
        );
      case 1:
        return (
          <BannerView
            gradient={variables.bannerGradient2}
            title={'MDCAT/NET/ECAT/SAT'}
            description={
              'Register Now to Book a FREE Demo Class of Entry Test Preparation.'
            }
            image={SLIDER2}
            buttonTitle1={'Register Now'}
            buttonPress1={() => {}}
          />
        );
      case 2:
        return (
          <BannerView
            gradient={variables.bannerGradient3}
            title={'JOIN LIVE CLASSES'}
            description={
              'Connect with Teachers, Classrooms will Open Up via Zoom.'
            }
            image={SLIDER3}
            buttonTitle1={'Free Live Classes'}
            buttonPress1={() => {}}
          />
        );
      case 3:
        <BannerView
          gradient={variables.bannerGradient4}
          title={'Sign Up For FREE Consultation'}
          description={'Stressed About Your College/University Applications.'}
          image={SLIDER4}
          buttonTitle1={'Schedule Free Consultation'}
          buttonPress1={() => {}}
        />;

      default:
        return (
          <BannerView
            gradient={variables.bannerGradient1}
            title={'Start your preparation'}
            description={'Let’s get you started with your exams preparation.'}
            image={SLIDER1}
            multiButtons={true}
            buttonTitle1={'O & A Level'}
            buttonPress1={() => {}}
            buttonTitle2={'Entry Test Preparation'}
            buttonPress2={() => {}}
          />
        );
    }
  };
  return (
    <View style={styles.main}>
      <Appbar
        leftIcon={MENUICON}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 0.85}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: width_screen}}>
          <CustomTextInput
            leftIcon={SearchIcon}
            width={width_screen * 0.9}
            height={40}
            borderRadius={15}
            placeholder={'Search'}
            onChangeText={e => {
              console.log(e);
            }}
          />
          {/* {Add Slider View} */}
          {_handleBanners()}

          {/* <ViewSlider
            renderSlides={
              <>
                
                
                
                
              </>
            }
            style={styles.slider} //Main slider container style
            height={height_screen * 0.2} //Height of your slider
            slideCount={4} //How many views you are adding to slide
            dots={true} // Pagination dots visibility true for visibile
            dotActiveColor={variables.colorWhite} //Pagination dot active color
            
            dotInactiveColor={variables.placeHolderColor} // Pagination do inactive color
            dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
            autoSlide={false} //The views will slide automatically
            slideInterval={2000} //In Miliseconds
          /> */}

          {/* {Card Views} */}

          <View style={styles.cards}>
            <PractiseCard
              onPress={() => {
                navigation.navigate('PracticeScreen');
              }}
            />
            <View style={styles.innerCards}>
              <CoursesCard onPress={() => {}} />
              <LiveClassCard
                onPress={() => {
                  navigation.navigate('JoinLiveClassForm');
                }}
              />
            </View>
          </View>
          {/* {Discover Video Lectures} */}
          {/* {Discover Slider } */}
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}
            style={styles.headingStyle}>
            {'Discover Video Lectures'}
          </Heading>
          <DiscoverVideoLecture
            onPress={() => {
              navigation.navigate('SelectVideoCourse');
            }}
          />

          <View style={{paddingVertical: '2.5%'}}>
            <Heading
              size={variables.fontSizePSmall}
              color={variables.colorFontDark}
              fontFamily={variables.interFontSemiBold}
              style={styles.headingStyle}>
              {'Notes'}
            </Heading>
            {/* {List of Notes} */}
            <CoursesNotesView
              image={DummyUrl[0]}
              title={'Chemistry'}
              watch={false}
              onPress={() => {
                navigation.navigate('RelevantNotes', {
                  course: {title: 'Chemistry'},
                });
              }}
            />
            <CoursesNotesView
              image={DummyUrl[1]}
              title={'Physics'}
              watch={false}
              onPress={() => {}}
            />
            <CoursesNotesView
              image={DummyUrl[2]}
              title={'Mathematics'}
              watch={false}
              onPress={() => {}}
            />
            <ThinButton
              onPress={() => {
                navigation.navigate('Notes');
              }}
              style={{paddingHorizontal: '5%', marginTop: '5%'}}>
              {'All Notes'}
            </ThinButton>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Practice;
