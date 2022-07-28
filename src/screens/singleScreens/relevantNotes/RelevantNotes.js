import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import AlertModal from '../../../components/modals/AlertModal';
import DownloadModal from '../../../components/modals/DownloadModal';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import SingleNotesView from '../../../components/views/SingleNotesView';
import {Notes, Worksheets} from '../../../data/data';
import variables from '../../../utils/utils';
import styles from './style';

function RelevantNotes({navigation, route}) {
  let {title} = route.params.course;
  const [isDownload, setDownload] = useState(false);
  const [downloadPressed, setDownloadpressed] = useState(false);
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterNo, setChapterNo] = useState('');

  return (
    <View style={styles.main}>
      <Appbar title={title + ' Notes'} />
      <View style={{flex: 0.9}}>
        {isDownload ? (
          !downloadPressed ? (
            <DownloadModal
              title={'Download Notes'}
              chapterName={
                chapterNo !== ''
                  ? `Chapter ${chapterNo}: ${chapterTitle}`
                  : `${chapterTitle}`
              }
              downloadLeft={2}
              onDownload={() => {
                setDownloadpressed(true);
              }}
              onClose={() => {
                setDownload(false);
              }}
            />
          ) : (
            <AlertModal
              title={'Download Notes'}
              message={'Notes Downloaded Successfully'}
              success={true}
              onPress={() => {
                setDownload(false);
              }}
              onClose={() => {
                setDownload(false);
              }}
            />
          )
        ) : null}
        <ScrollView>
          <Heading
            size={variables.getSize(14)}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}
            style={{marginHorizontal: '5%', marginVertical: '3%'}}>
            {`Worksheets`}
          </Heading>
          {Worksheets.map((item, index) => {
            return (
              <SingleNotesView
                key={index}
                bulletsType={'dots'}
                title={item}
                onDownload={title => {
                  setChapterNo('');
                  setChapterTitle(title);
                  setDownloadpressed(false);
                  setDownload(true);
                }}
              />
            );
          })}
          <Heading
            size={variables.getSize(14)}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}
            style={{marginHorizontal: '5%', marginVertical: '3%'}}>
            {`${title} (Updated)`}
          </Heading>
          {Notes.map((item, index) => {
            return (
              <SingleNotesView
                key={index}
                bulletsType={'numeric'}
                title={item}
                index={index + 1}
                onDownload={(title, index) => {
                  console.log('INDEXX==>', index);

                  setChapterNo(index);
                  setChapterTitle(title);
                  setDownloadpressed(false);
                  setDownload(true);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default RelevantNotes;
