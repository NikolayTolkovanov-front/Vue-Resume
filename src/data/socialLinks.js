const socialLinks = [
	{
		id: 1,
		name: 'Telegram',
		icon: 'telegram',
		url: 'https://t.me/zorg210780/',
	},
	{
		id: 2,
		name: 'GitHub',
		icon: 'github',
		url: 'https://github.com/NikolayTolkovanov-front',
	},
	{
		id: 3,
		name: 'Vkontakte',
		icon: 'vk',
		url: 'https://vk.com/ntolkovanov',
	},
];

const socialSharings = [
	{
		id: 1,
		name: 'Telegram',
		icon: 'telegram',
		url: 'https://telegram.me/share/url?url=',
	},
	{
		id: 2,
		name: 'Facebook',
		icon: 'facebook',
		url: 'https://www.facebook.com/sharer/sharer.php?u=',
	},
	{
		id: 3,
		name: 'Vkontakte',
		icon: 'vk',
		url: 'https://vk.com/share.php?url=',
	},
]

const getSocialLinks = () => {
	return socialLinks
}

const getSocialSharings = () => {
	return socialSharings
}

export { socialLinks, socialSharings, getSocialLinks, getSocialSharings }
