
exports.seed = function(knex) {
  return knex('plants').insert([
    {nickname: 'Camellias', species: 'Theaceae', h2oFrequency: '2.9', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F06%2F14%2FGettyImages-1194703346-2000.jpg', user_id: 1},
    {nickname: ' Japanese Wisteria', species: 'Wisteria', h2oFrequency: '3.0', image: 'https://www.gardenia.net/storage/app/public/guides/detail/gvziN5DcEzVa3e4oidmx6zUAbiHZDSVBVCcLyK3t.jpeg', user_id: 1},
    {nickname: 'Viola', species: 'Violaceae', h2oFrequency: '4.0', image: 'https://www.thespruce.com/thmb/RtAFtdkQ4-OvlnabempUpWkc_9k=/2200x2200/smart/filters:no_upscale()/kararileyviolas-12-cc7d3f6089fc4a3dbcf0f33cc2a86158.jpg', user_id: 1}
  ]);
};