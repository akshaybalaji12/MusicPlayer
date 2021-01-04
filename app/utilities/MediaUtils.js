import _ from 'underscore';

export default function mediaUtils(mediaFiles) {
    console.log('In MediaUtils');
	if (!Array.isArray(mediaFiles) || mediaFiles.length === 0) return [];
	let newMedia = [];
	let folderName = '';
	for (let i = 0; i < mediaFiles.length; i++) {
		folderName = getFolder(mediaFiles[i].path);
		newMedia.push({
			id: mediaFiles[i].duration + i,
			duration: mediaFiles[i].duration,
			url: mediaFiles[i].path,
			title:
				mediaFiles[i].title || mediaFiles[i].fileName.replace(/.mp3|.aac|.wav|.amr|.flac/, ''),
			artwork: mediaFiles[i].cover || null,
			artist: mediaFiles[i].author === '<unknown>' ? 'unknown' : mediaFiles[i].author,
			album: mediaFiles[i].album === '<unknown>' ? 'unknown' : mediaFiles[i].album,
			index: i,
			folder: folderName
			// pitchAlgorithm: PITCH_ALGORITHM_MUSIC
		});
	}
	return { albums: getAlbums(newMedia), tracks: newMedia };
}

function getFolder(path) {
	let dirArr = path.split('/');
	return dirArr[dirArr.length - 2];
}

function getAlbums(media) {
	let sectionsData = [];
	let data = _.groupBy(media, 'album');
	let titles = Object.keys(data);
	titles.forEach((title) => {
		sectionsData.push({
			title,
			data: data[title]
		});
	});
	let sortedData = _.sortBy(sectionsData, 'title').filter((item) => item.title !== 'null');
	return sortedData;
}
